import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'

const getSites = () => {
    const filePath = path.join(process.cwd(), 'src', 'lib', 'sites.yml')
    const content = fs.readFileSync(filePath, 'utf-8')
    const result = yaml.load(content)

    return result
}

export default getSites