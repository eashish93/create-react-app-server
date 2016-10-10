import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {meta: props.meta}

    }

    render() {
        return (
            <div>
                <h3>Getting list of users</h3>
                {this.state.meta.map((data, i) => {
                    return <div key={data.id}>
                        <p><strong>Name:&nbsp;&nbsp;</strong> {data.name}</p>
                        <p><strong>Email id:&nbsp;&nbsp;</strong>{data.email}</p>

                    </div>
                })}
            </div>
        )
    }
}


export default Home;
