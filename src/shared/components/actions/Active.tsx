import { DoneAll, RemoveDone, Visibility } from '@mui/icons-material'
import { IconButton, TableCell, Tooltip } from '@mui/material'
import { LinkIcon, useDialogContext, useParamsContext } from '../../../shared'

interface iActionsActiveProps {
  handleData: () => void
  is_active: boolean
  to: string
  back: string
}

export const ActionsActive = ({
  handleData,
  is_active,
  to,
  back,
}: iActionsActiveProps) => {
  const { handleOpenActive } = useDialogContext()
  const { onClickReset, handleBack, back: oldBack } = useParamsContext()

  const onClickDetail = () => {
    handleBack(oldBack, back)
    onClickReset()
  }

  const onClickActive = () => {
    handleData()
    handleOpenActive()
  }

  return (
    <TableCell>
      {is_active ? (
        <>
          <LinkIcon
            icon={<Visibility fontSize="small" />}
            label="Detalhar"
            onClick={onClickDetail}
            to={to}
          />

          <Tooltip title="Desativar">
            <IconButton color="error" size="small" onClick={onClickActive}>
              <RemoveDone fontSize="small" />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <Tooltip title="Ativar">
          <IconButton color="success" size="small" onClick={onClickActive}>
            <DoneAll fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </TableCell>
  )
}
