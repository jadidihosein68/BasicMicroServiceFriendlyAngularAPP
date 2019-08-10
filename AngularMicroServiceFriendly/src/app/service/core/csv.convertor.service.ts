
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

export class csvConvertorService {

    private options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true, 
        showTitle: false,
        useBom: true,
        noDownload: false,
        headers: []
      };

    public getMACDcsv (data:any[]){
        
        this.options.headers= this.getProperty(data[0]) ;
        new Angular5Csv(data, "CSV",  this.options);
    }

    private getProperty(sample : any){
       
        let elements = [] ;
        for (var element in sample )
        {
            elements.push(element)
        }
        return elements;
    }
}