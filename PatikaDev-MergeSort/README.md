# Merge-Sort

[16,21,11,8,12,22]

Soru-1 :  Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

   > Elimizdeki sayı dizisini parçalara ayırıp ayırdığımız parçları daha küçük sayı dizisine kendi arasında sırlayıp sonra birştireceğiz.


Dizi => [16,21,11,8,12,22] 

1.Adım : [16,21,11], [8,12,22]

2.Adım :[16,21],[11]  , [8,12],[22]

3.Adım :[16],[21],[11],[8],[12],[22]

4.Adım : [16,21],[11] ,[8,12,22],[22]

5.Adım :[11,16,21,],[8,12,22]

6.Adım : [8,11,12,16,21,22]


Soru-2 : Big-O gösterimini yazınız.

>> O(nlogn)
