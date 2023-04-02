const Categories = (props) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Category Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.categories.map((category, index) => {
                        return (
                            <tr key={ index }>
                                <td>{ category }</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Categories;