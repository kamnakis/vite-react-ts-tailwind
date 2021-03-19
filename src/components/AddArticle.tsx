import * as React from "react"

type Props = {
  saveArticle: (article: IArticle | any) => void
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    <form onSubmit={addNewArticle} className="flex space-x-3 mt-2">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
        className="border p-1 rounded-sm"
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
        className="border p-1 rounded-sm"
      />
      <button
        disabled={article === undefined ? true : false}
        className="bg-green-500 px-4 py-1 rounded-sm text-white font-semibold"
      >
        Add article
      </button>
    </form>
  )
}
