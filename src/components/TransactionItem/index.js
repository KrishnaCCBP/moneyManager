import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-history">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">RS {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-icon-container">
        <button
          className="delete-button"
          type="button"
          onClick={onClickDelete}
          testid="delete"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
