const List = ({todos, onCompleteClicked}) => {
    return (
        todos.map(
            item => (
              <div key={item.id}>
                <button onClick={() => onCompleteClicked(item.id)}>complete</button>
                <label htmlFor={item.id}>{item.content}</label>
              </div>
            )
          )
        );
}

export default List;