import Typography, {TypographyType} from "./Typography";
import abbreviate from "../utilities/abbreviate";
import {FC} from "react";

export type SubHighlight = {
    value?: number,
    text: string
}

export interface StatCardProps {
    title: string,
    highlight?: number,
    secondary?: SubHighlight,
    tertiary?: SubHighlight,
    bgColor?: 'green' | 'amber' | 'cyan',
    delimiter?: string,
}

const StatCard:FC<StatCardProps> = ({title, highlight, secondary, tertiary, delimiter = '', bgColor= 'green'}) => {
  const generateColor = () => {
      switch (bgColor) {
          case 'green':
              return {
                  background: 'bg-green-100',
                  text: 'text-green-400'
              }
          case 'amber':
              return {
                  background: 'bg-amber-100',
                  text: 'text-amber-400'
              }
          default:
              return {
                  background: 'bg-cyan-100',
                  text: 'text-cyan-400'
              }
      }
  }
  return (
      <div className="bg-white rounded-lg flex flex-col items-center w-full max-w-sm p-8">
          <div className="w-full mb-8">
              <Typography color="text-gray-400" isBold type={TypographyType.Small}>{title}</Typography>
          </div>
          <div className={`lg:w-48 lg:h-48 w-32 h-32 flex items-center justify-center ${generateColor().background} rounded-full`}>
              <Typography isBold color={generateColor().text} type={TypographyType.Medium}>{highlight ? `${delimiter}${abbreviate(highlight)}` : '-'}</Typography>
          </div>
          <div className="w-full flex justify-between mt-8">
              {
                  secondary && (
                      <div className="text-center">
                          <Typography color="text-gray-400" type={TypographyType.XSmall}>{secondary?.value ? `${delimiter}${abbreviate(secondary.value)}` : '-'}</Typography>
                          <Typography color="text-gray-400" type={TypographyType.XSmall}>{secondary.text}</Typography>
                      </div>
                  )
              }
              {
                  tertiary && (
                      <div className="text-center">
                          <Typography color="text-gray-400" type={TypographyType.XSmall}>{tertiary?.value ? `${delimiter}${abbreviate(tertiary.value)}` : '-'}</Typography>
                          <Typography color="text-gray-400" type={TypographyType.XSmall}>{tertiary.text}</Typography>
                      </div>
                  )
              }
          </div>
      </div>
  )
}

export default StatCard;