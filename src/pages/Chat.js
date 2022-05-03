import React, { useEffect, useState } from 'react'

import { StreamChat } from 'stream-chat'
import{
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window
} from 'stream-chat-react'

import 'stream-chat-react/dist/css/index.css'

const apiKey = '9xrg7mfxu3ek'

const user = {
  id: 'rylee',
  name: 'Rylee Mitchell',
}

const filters = {type: 'messaging', members: { $in: [user.id] }}
const sort = { last_message_at: -1 }

export default function App() {
  const [client, setClient] = useState(null)

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey)

      await chatClient.connectUser(user, chatClient.devToken(user.id))

      const channel = chatClient.channel('messaging', 'sam-chat', {
        name: 'Samantha Rodriguez',
        members: [user.id]
      })

      await channel.watch()

      setClient(chatClient)
    }

    init()

    if (client) return () => client.disconnectUser()
  }, [])

  if (!client) return <LoadingIndicator />

  return(
    <Chat client={client} theme="messaging light">
      <ChannelList
        filters={filters}
        sort={sort}/>
      <Channel >
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}
