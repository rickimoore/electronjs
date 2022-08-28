import Typography, {TypographyType} from "../components/Typography";
import useFakeMessages from "../hooks/useFakeMessages";
import moment from "moment";
import {useRecoilState} from "recoil";
import {favoriteMessages, selectedMessages} from "../recoil/atoms";
import Input from "../components/Input";
import {useMemo, useState} from "react";
import Button, {ButtonFace} from "../components/Button";

enum InboxView {
    ALL = "ALL",
    SAVED = "SAVED",
    STARRED = "STARRED"
}

const Inbox = () => {
    const messages = useFakeMessages(14);

    const [inboxView, setView] = useState<InboxView>(InboxView.ALL);

    const [selected, toggleSelected] = useRecoilState<number[]>(selectedMessages);
    const [favorites, toggleFavorite] = useRecoilState<number[]>(favoriteMessages);

    const [searchQuery, setQuery] = useState<string>('');

    const filteredMessages = useMemo(() => {
        return messages.filter(({title, sender}) => searchQuery ? (title.toLowerCase().includes(searchQuery.toLowerCase()) || sender.toLowerCase().includes(searchQuery.toLowerCase()))  : true)
    }, [searchQuery, messages, inboxView]);

    const filteredViewMessages = useMemo(() => {
        return filteredMessages.filter(({id}) => inboxView === InboxView.STARRED ? favorites.includes(id) : inboxView === InboxView.SAVED ? selected.includes(id) : true )
    }, [filteredMessages, inboxView, favorites, selected]);

    const toggleList = (id: number, list: 'selected' | 'favorites') => {
        const toggle = (prev: number[]) => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
        list === 'selected' ? toggleSelected(toggle) : toggleFavorite(toggle);
    }
    const toggleView = (view: InboxView) => {
        if(inboxView === view) {
            setView(InboxView.ALL);
            return;
        }

        setView(view);
    }

  return (
      <div className="flex flex-col items-center w-full px-8 pt-12 pb-24">
          <div className="w-full max-w-6xl">
              <Typography type={TypographyType.Large}>Inbox</Typography>
              <div className="w-full bg-white rounded-lg mt-8">
                  <div className="p-5 h-24 w-full flex justify-between">
                      <Input onChange={e => setQuery(e.target.value)} placeholder="Search Messages" className="w-full max-w-xs" />
                      <div className="flex space-x-4">
                          <Button onClick={() => toggleView(InboxView.SAVED)} face={inboxView === InboxView.SAVED ? ButtonFace.PRIMARY : ButtonFace.TERTIARY} className="h-12 w-14 p-2">
                              <i className="bi bi-bookmark-check"/>
                          </Button>
                          <Button onClick={() => toggleView(InboxView.STARRED)} face={inboxView === InboxView.STARRED ? ButtonFace.PRIMARY :  ButtonFace.TERTIARY} className="h-12 w-14 p-2">
                              <i className="bi bi-star"/>
                          </Button>
                      </div>
                  </div>
                  <ul>
                      {filteredViewMessages.length ? filteredViewMessages.map(({id, sender, title, date}, index) => {
                          const isSelected = selected.includes(id);
                          const isFavorite = favorites.includes(id);
                          return (
                              <li tabIndex={1} key={index} className="w-full hover:bg-highlight200 cursor-pointer p-5 border-b flex flex-col md:flex-row md:items-center">
                                  <div className="flex md:w-1/2 space-x-4">
                                      <div onClick={() => toggleList(id, 'selected')}>
                                          {isSelected ? <i className="bi bi-check-square-fill" /> : <i className="bi bi-square" />}
                                      </div>
                                      <div onClick={() => toggleList(id, 'favorites')}>
                                          {isFavorite ? <i className="bi bi-star-fill text-amber-400"/> : <i className="bi bi-star"/>}
                                      </div>
                                      <Typography type={TypographyType.Small}>{sender}</Typography>
                                  </div>
                                  <div className="flex flex-1 justify-between mt-4 md:mt-0 md:px-4 space-x-4">
                                      <Typography type={TypographyType.Small}>{title}</Typography>
                                      <Typography type={TypographyType.Small}>{moment(date).format('HH:ss')}</Typography>
                                  </div>
                              </li>
                          )
                      }) : (
                          <div className="p-12">
                              <div className="w-full h-96 p-8 bg-slate-100 flex items-center justify-center rounded">
                                  <Typography>No Results Found</Typography>
                              </div>
                          </div>
                      )}
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Inbox;