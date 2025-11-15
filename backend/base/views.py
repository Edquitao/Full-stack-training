from django.shortcuts import get_object_or_404
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializer import ProducSerializer

# Create your views here.

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProducSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_products_detail(request,pk):
    product = get_object_or_404(Product, pk=pk)
    serializer= ProducSerializer(product)
    return Response(serializer.data)