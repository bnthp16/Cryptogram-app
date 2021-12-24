import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import activity from "../../Actions/activity";
import { RowOrder } from "../../components/order";
import { RowTransfert } from "../../components/transfert";
import { PageContainer } from "../../components/PageContainer";
import { v4 as uuidv4 } from "uuid";

const Activity = ({ state, token }) => {
  const [dashState, getDashState] = useState(state) 
  const currentUserOrder = state? state.order : null
  const currentUserTransfert = state? state.transfert : null
  const currentUserTransfertLength = state? state.transfert.length : null
  const currentUserOrderLength = state? state.order.length : null

  const getOrders = state? currentUserOrder.map((el, index) => {
    return (
      <div key={uuidv4()}>
        <RowOrder
          key={el.id}
          rank={index + 1}
          order_id={el.order_id}
          crypto_name={el.crypto_name}
          amount_in_user_currency={el.amount_in_user_currency}
          amount_converted_in_coin={el.amount_converted_in_coin}
          created_at={el.created_at}
        />
      </div>  
    )
  }) : null

  const getTransferts = state? currentUserTransfert.map((el, index) => {
    return (
      <div key={uuidv4()}>
        <RowTransfert
          key={el.id}
          rank={index + 1}
          amount_converted_in_coin={el.amount_converted_in_coin}
          amount_in_user_currency={el.amount_in_user_currency}
          transfert_id={el.transfert_id}
          crypto_name={el.crypto_name}
          created_at={el.created_at}
        />
      </div>
      )
  }) : null
  useEffect(()=>{
    activity(token)
  },[dashState])

  return(
    <>
        <PageContainer>
          <h1>Récente activité</h1>
          <div id="col-info-activity">
            <p className="a-rank">#</p>
            <p className="a-type">Type</p>
            <p className="a-name">Nom cryptomonnaie</p>
            <p className="a-amount">Quantité</p>
            <p className="a-total">Montant</p>
            <p className="a-id">Ref achat</p>
            <p className="a-date">Date achat</p>
          </div>
          <div className="hr"></div>
            {currentUserOrderLength === 0 || currentUserOrderLength === null?
              <p>vous n'avez pas encore effectué d'achat</p>
              : getOrders
            }
           {currentUserTransfertLength === 0 || currentUserTransfertLength === null?
              <p>vous n'avez pas encore effectué de transfert </p>
              : getTransferts
            }
        </PageContainer>
    </>
  )
}

export const ActivityStore = connect(
  (state) => ({
    state: state.activityReducer.activityInfos
  })
)(Activity)
export default Activity