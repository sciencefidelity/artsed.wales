import React from 'react'
import emoji from 'react-easy-emoji'

export const lang_CULTURE = ({code}) => (
  <span>{code === 'cy' ? emoji('🏴󠁧󠁢󠁷󠁬󠁳󠁿') : emoji('🇬🇧')}</span>
)
