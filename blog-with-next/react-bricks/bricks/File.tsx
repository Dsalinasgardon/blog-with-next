import React from 'react'
import { types, File } from 'react-bricks/frontend'

const CatalogDownload: types.Brick = () => {
  return (
    <div>
      <File
        propName="file"
        allowedExtensions={['']}
        renderBlock={(file) => {
          return file ? (
            <a href={file.url} className="flex font-semibold h-full items-center">
              Download "{file.name}" <small>({file.size.toFixed(2)} MB)</small>
            </a>
          ) : (
            <div className="flex font-semibold h-full items-center">
              No catalog yet.
            </div>
          )
        }}
      />
    </div>
  )
}

CatalogDownload.schema = {
  name: 'catalog-download',
  label: 'Catalog Download',
}

export default CatalogDownload