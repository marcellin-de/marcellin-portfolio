import renderTechnologyIcon from '../../lib/technologyCatalog';

export default function Technology({
    name,
    className,
    size,
    showLabel = false,
}: {
    name: string;
    className?: string;
    size?: string;
    showLabel?: boolean;
}) {
    const iconClass = className || size || 'w-6 h-6';
    return (
        <div className="inline-flex items-center gap-2">
            {renderTechnologyIcon(name, { className: iconClass })}
            {showLabel && <span className="text-sm font-medium">{name}</span>}
        </div>
    );
}
