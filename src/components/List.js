const List = () => {
    const items = [{
        id: 1,
        name: 'item 1'
        },
        {
        id: 2,
        name: 'item 2'
        },
        {
        id: 3,
        name: 'item 3'
    }];    
    
    return (
        <div>
            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}        
        </div>
    );    
};

export default List;

