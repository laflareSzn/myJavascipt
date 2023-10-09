# def main():

# print ("Ovulation Calculator")
# print("Input the last date of last menstrual period and cycle enght to get the ovulation")

# lmp = Input("Input the first and Date of Last Menstrual Period (dd/mm/yyyy): ")
# cycle = Input("Input the lenght of Menstrual Cycle (Days): ")
# lmp = datetime.datetime.strptime(lmp, "%d/%m/%y")
# cycle = int(cycle)

# ovulation_date = calculate_ovulation_date(lmp, cycle)

# print ("Ovulation Date: " + ovulation_date.strftime("%d/%m/%y"))
  
# def convert_to_date(value):
#     try:
#         return datetime.strptime(lmp, "%d/%m/%y")
#         except:
#             print("invalid date, Please input the date in the correct format.")
#             sys.exit()
  
  
# def convert_to_int(value):
#     try:
#         return datetime.strptime(value, "%d/%m/%y")
#         except:
#             print("invalid date, Please input a valid number of days.")
#             sys.exit()



# def calculate_ovulation_date(lmp, cycle):
# estimated_ovulation_date = cycle - 14
# ovulation_day = datetime.timedelta (days = estimated_ovulation_date)
# ovulation_day = lmp + ovulation_day
# return ovulation_day


# if__name__ == main
# main( )