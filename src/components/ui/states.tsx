export function Skeleton({ className='' }: { className?: string }) { return <span aria-hidden="true" className={`vf-skeleton ${className}`} /> }
export function EmptyState({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) { return <div className="vf-empty" role="status"><strong>{title}</strong><p>{description}</p>{action}</div> }
