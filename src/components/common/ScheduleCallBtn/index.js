import React from "react"
import { openPopupWidget } from "react-calendly"
import { Button } from "components/common"

export const ScheduleCallBtn = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm })
  return (
    <Button secondary onClick={onClick}>
      Schedule a call
    </Button>
  )
}
