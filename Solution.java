class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {

        int max = flowerbed.length -1;

        if(n >= max)
            return false;
        
        if(max == 0)
            if(flowerbed[0] == 1)
                return false;
            else
                return true;
        
        if(max == 1){
            if(flowerbed[0] == 1 || flowerbed[1] == 1)
                return false;
            
            return true;
        }

        for(int i = 0; i <= max; i++){
            if(i == 0 && flowerbed[i] == 0){
                if(flowerbed[i+1] == 0){
                    flowerbed[i] = 1;
                    n--;
                }
                continue;
            }

            if(flowerbed[i] == 1)
                continue;

            if(flowerbed[i] - 1 == 1)
                continue;

            if(i == max){
                n--;
                break;
            }

            if(flowerbed[i+1] == 1)
                continue;
            
            n--;
            flowerbed[i] = 1;
        }
        return n <= 0;
    }
}