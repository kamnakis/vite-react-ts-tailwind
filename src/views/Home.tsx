import React, { Dispatch } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { addArticle, removeArticle } from "../store/actionCreators"

// Components
import { AddArticle } from "../components/AddArticle"
import { Article } from "../components/Article"

export const Home: React.FC = () => {
  const articles: readonly IArticle[] = useSelector((state: ArticleState) => state.articles, shallowEqual)

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main className="px-10 mt-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900">My Articles</h1>
      <AddArticle saveArticle={saveArticle} />

      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  )
}