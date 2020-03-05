import React from 'react'
import Banner from '../components/Banner'
import Breadcrumb from '../components/Breadcrumb'
import { Route, withRouter, NavLink, Switch, matchPath } from 'react-router-dom'
import Product from './Product'

function ProductCategory(props) {
  // 利用match.params來取得url params (記得App元件中的Route要先定義)
  console.log(props.match.pathname)

  // 利用location.search來取得query string
  //console.log('props.location.search', props.location.search)
  // 利用內建的API來得到URLSearchParams物件 (注意IE完全不相容，要改用query-string模組)
  //const searchParams = new URLSearchParams(props.location.search)

  const url = props.match.url
  const path = props.match.path
  return (
    <>
      <Banner pagename="產品分類" />
      <Breadcrumb />
      <nav class="nav nav-pills">
        <NavLink activeClassName="active" className="nav-link" to={`${url}/pc`}>
          PC
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to={`${url}/mobile`}
        >
          手機
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to={`${url}/notebook`}
        >
          筆電
        </NavLink>
      </nav>

      <Switch>
        <Route exact path={path}>
          <h3>請選擇子分類</h3>
        </Route>
        <Route path={`${path}/:type?/:id?`}>
          <Product />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(ProductCategory)
