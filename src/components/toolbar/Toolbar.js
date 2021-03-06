import React from 'react'
import PropTypes from 'prop-types'
import {
  DirectoryIcon,
  SettingsIcon,
  ShortcutsIcon
} from '../icons'
import { Button, LinkButton, SnapshotsButton } from './buttons'

const Toolbar = ({
  theme = 'light',
  docType,
  docName,
  docKeys,
  onTakeSnapshot,
  snapshots
}) => (
  <div className={`${theme === 'light' ? 'bg-white' : 'bg-cloud-burst'} pt1`}>
    <div className='mb3'>
      <SnapshotsButton theme={theme} onTakeSnapshot={onTakeSnapshot} snapshots={snapshots} />
    </div>
    <div className='mb3'>
      <LinkButton theme={theme} docType={docType} docName={docName} docKeys={docKeys} />
    </div>
    <div className='mb3'>
      <Button theme={theme} icon={DirectoryIcon} title='Coming soon: View directory' disabled />
    </div>
    <div className='mb3'>
      <Button theme={theme} icon={SettingsIcon} title='Coming soon: Settings' disabled />
    </div>
    <div className='mb3'>
      <Button theme={theme} icon={ShortcutsIcon} title='Coming soon: Shortcuts' disabled />
    </div>
  </div>
)

Toolbar.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  docType: PropTypes.oneOf(['markdown', 'richtext', 'math']).isRequired,
  docName: PropTypes.string.isRequired,
  docKeys: PropTypes.shape({
    read: PropTypes.string.isRequired,
    write: PropTypes.string
  }).isRequired,
  onTakeSnapshot: PropTypes.func.isRequired,
  snapshots: PropTypes.array.isRequired,
  onDirectoryClick: PropTypes.func,
  onSettingsClick: PropTypes.func,
  onShortcutsClick: PropTypes.func
}

export default Toolbar
