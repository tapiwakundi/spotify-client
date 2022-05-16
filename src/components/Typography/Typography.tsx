import styles from './index.module.css'

type Props = {
    children: string;
    className?: string;
}

export const Typography = () => { }

const LargeTitle = ({ children }: Props) => {
    return <h1 style={{ fontSize: '2em' }}>{children}</h1>
}

const Title1 = ({ children }: Props) => {
    return <h1>{children}</h1>
}

const Caption = ({ children }: Props) => {
    return <span className={styles.caption}>{children}</span>
}

const Caption2 = ({ children }: Props) => {
    return <span className={styles.caption2}>{children}</span>
}

const Headline = ({ children }: Props) => {
    return <span className={styles.headline}>{children}</span>
}

const Callout = ({ children }: Props) => {
    return <span className={styles.callout}>{children}</span>
}

const Callout2 = ({ children, className }: Props) => {
    return <span className={`${styles.callout2} ${className}`}>{children}</span>
}
Typography.LargeTitle = LargeTitle
Typography.Title1 = Title1
Typography.Caption = Caption
Typography.Caption2 = Caption2
Typography.Headline = Headline
Typography.Callout = Callout
Typography.Callout2 = Callout2