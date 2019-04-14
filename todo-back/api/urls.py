from django.urls import path
from . import views

urlpatterns = [
    path('task_lists/', views.task_list),
    path('task_lists/<int:pk>/', views.task_list_detail),
    path('task_lists/<int:pk>/tasks/', views.task_list_task),
    path('tasks/<int:pk>/', views.task_detail)
]
