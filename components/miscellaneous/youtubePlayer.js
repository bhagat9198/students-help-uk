import React from 'react'
import YouTube from 'react-youtube';

export default function YoutubePlayer() {

  return (
    <YouTube
      videoId={'V5UsKBBXMn4'}                  // defaults -> ''
      // id='V5UsKBBXMn4'                       // defaults -> ''
      // className={string}                // defaults -> ''
      // iframeClassName={string}          // defaults -> ''
      // style={object}                    // defaults -> {}
      title={'Title of the video of comp'}                    // defaults -> ''
      // loading={string}                  // defaults -> undefined
      // opts={obj}                        // defaults -> {}
      onReady={() => {}}                    // defaults -> noop
      onPlay={() => {}}                     // defaults -> noop
      onPause={() => {}}                    // defaults -> noop
      onEnd={() => {}}                      // defaults -> noop
      onError={() => {}}                    // defaults -> noop
      onStateChange={() => {}}              // defaults -> noop
      onPlaybackRateChange={() => {}}       // defaults -> noop
      onPlaybackQualityChange={() => {}}    // defaults -> noop
    />
  )
}
