import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

export const useAsync = (
  asyncFn: () => Promise<AxiosResponse<any, any>>,
  successFn: Function,
  returnFn: Function,
  dependencies: any[] = []
) => {
  useEffect(() => { 
    let isSubscribed = true;
    asyncFn().then((result) => {
      if (isSubscribed) {
        successFn(result.data);
      }
    })
    return () => { 
      returnFn && returnFn();
      isSubscribed = false;
    }
  }, dependencies);
}