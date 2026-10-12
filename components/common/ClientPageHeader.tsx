type Probs = {
    title:string;
    subtitle:string;
}
export default function ClientPageHeader ({title,subtitle}:Probs){
    return(
 <div>
      <h1 className="text-5xl font-heading font-bold mb-2">{title}</h1>
      <p className="font-mono text-sm text-muted-foreground mb-8">{subtitle}</p>
    </div>
    );
}