# here some changes i have to make is increase the test_size
# next is set a padding ,and max_length thingy i am not sure 
#research to be done on the max_length , i would prefer >512
from datasets import load_datasets
data=load_datasets('csv',data_files='data.csv')  # have to figure out the dataaset

data=data['train'].train_test_split(test_size=0.2)

from transformers import autotransformers 

tokenizer=Autotokenizer.from_pretrained("microsoft/codebert-base")
model=AutoModelForSequenceClassification.from_pretrained("microsoft/codebert-base")

def preprocess(quantity):
    return tokenizer(quantity["Proper code"],truncation=True,max_length=512)


tokenized_data=data.map(preprocess_function,batched=True)
