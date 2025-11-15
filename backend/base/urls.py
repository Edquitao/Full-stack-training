from django.urls import path
from .views import get_products
from .views import get_products_detail

urlpatterns= [
    path('products/',get_products, name= 'products'),
    path('products/<int:pk>/', get_products_detail, name= 'product-detail'),
]