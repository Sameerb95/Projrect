from main import * 

class Track:
    __Status_Dict = {1:"Order Accepted",
                     2:"Payment_Remaning", 
                     3:"Payment_Received",
                     4:"Buying in Progress",
                     5:"Buying Completed / Getting ready for Delivery",
                     6:"Delivered"}
    
    __Status = ""

    def setStatus(self,Status):
        self.__Status = self.__Status_Dict[Status]
    
    def getStatus(self):
        return self.__Status
    

if __name__ == '__main__':
    tr = Track()

    option = int(input("""
                    Input the Status: 
                   
                     1:Order Accepted
                     2:Payment_Remaning 
                     3:Payment_Received
                     4:Buying in Progress
                     5:Buying Completed / Getting ready for Delivery
                     6:Delivered

                    """))
    
    tr.setStatus(option)
    print(tr.getStatus())    
