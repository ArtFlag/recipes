import React from 'react'
import YouTubePlayer from 'react-youtube'

export default function YouTube({ id }: { id: string }): JSX.Element {
  return <YouTubePlayer videoId={id} className="youtube-video-container" />
}
