export interface INewsItem{
    cat: string
    heading: string
    subheading: string
    description: string
    img?: string
    id: string
    date:Date
}
export type childType = {label:{en:string,bn:string},type:string,child?:{label:{en:string,bn:string},type:string}[]}
export type menuItem = {
    label:{en:string,bn:string}
    type:'dropdown'|'link'
    child?:childType[]

}

export interface IcategoriesType{


}