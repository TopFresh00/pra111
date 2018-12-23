import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

function mainPage()
{
    return <div>
                <h1>Главная страница (здесь может быть ваша реклама:D)</h1>
                <h2>Перейти на страницу:</h2>
           </div>
}
function userPage()
{
    return <div>
                <h1>Страница с таблицей пользователей</h1>
                <h2>Перейти на страницу:</h2>
           </div>

        /*<button onClick={}>Обновить информацию<\button>*/
}
function userAddPage()
{
    return <div>
                <h1>Страница для добавления пользователей</h1>
                <h2>Перейти на страницу:</h2>
           </div>
}
function userEditPage()
{
    return <div>
                <h1>Страница для редактирования таблицы пользователей</h1>
                <h2>Перейти на страницу:</h2>
           </div>
}
function userRemovePage()
{
    return <div>
                <h1>Страница для удаления пользователей</h1>
                <h2>Перейти на страницу:</h2>
           </div>
}
export default class App extends Component {
    componentWillMount()
    {
        axios({
            method: 'get',
            url: '/api/users'
        }).then(
            response => {
                this.setState({
                    users: response.data
                });

               console.log(response)
            }
        ).catch(
            errors => console.log(errors)
        );
        axios({
            method: 'post',
            url: '/api/users'
        }).then(
            response => {
                this.setState({
                    users: response.data
                });
            }
        ).catch(
            errors => console.log(errors)
        );
        axios({
            method: 'put/patch',
            url: '/api/users'
        }).then(
            response => {
                this.setState({
                    users: response.data
                });
            }
        ).catch(
            errors => console.log(errors)
        );
        axios({
            method: 'delete',
            url: '/api/users'
        }).then(
            response => {
                this.setState({
                    users: response.data
                });
            }
        ).catch(
            errors => console.log(errors)
        );
    }

    render() {
        return(
            <BrowserRouter>
                <div>

                    <Switch>
                        <Route path="/" exact component={mainPage}/>
                        <Route path="/users" exact component={userPage}/>
                        <Route path="/users/add" exact component={userAddPage}/>
                        <Route path="/users/edit" exact component={userEditPage}/>
                        <Route path="/users/remove" exact component={userRemovePage}/>
                        {/*<Route*/}
                        {/*path="/users/:id" exact*/}
                        {/*render={props => <Update{...props}/>}*/}
                        {/*/>*/}
                    </Switch>
                    <div className="nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 nav__col">
                                    <Link to="/">На главную</Link>
                                </div>
                                <div className="col-6 nav__col">
                                    <Link to="/users">Таблица пользователей</Link>
                                </div>
                                <div className="col-6 nav__col">
                                    <Link to="/users/add">Добавить пользователя</Link>
                                </div>

                                <div className="col-6 nav__col">
                                    <Link to="/users/edit">Редактировать список пользователей</Link>
                                </div>
                                <div className="col-6 nav__col">
                                    <Link to="/users/remove">Удалить пользователя</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </BrowserRouter>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
