
type Props = {
    children: string
}

export const Typography = () => { }

const Title1 = ({ children }: Props) => {
    return <h1>{children}</h1>
}

Typography.Title1 = Title1