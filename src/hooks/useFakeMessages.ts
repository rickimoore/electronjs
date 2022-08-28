import {useMemo} from "react";
import {faker} from "@faker-js/faker";

const useFakeMessages = (count: number) => {
    return useMemo(() => {
        return Array.from(Array(count).keys()).map((item) => ({
            id: item,
            sender: faker.name.fullName(),
            title: faker.company.catchPhrase(),
            date: faker.date.past(),
            messages: Array.from(Array(Math.floor(Math.random() * count) + 1).keys()).map(() => faker.lorem.paragraph())
        }))
    }, [count])
}

export default useFakeMessages;