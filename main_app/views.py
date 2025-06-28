from django.shortcuts import render,redirect
from django.core.mail import send_mail
from .models import *
# Create your views here.

def index(request):
    projects = Project.objects.all()
    team_members = TeamMember.objects.all()
    context = {
        'projects': projects,
        'team_members': team_members,
    }
    return render(request,'index.html',context)

def contact(request):
    print("contact")
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        contact = Contact(name=name, email=email, message=message)
        contact.save()

        send_mail(
            subject=f'New Contact from {name}',
            message=f'Email: {email}\n\nMessage:\n{message}',
            from_email='creonextech@gmail.com',  # Can be same as DEFAULT_FROM_EMAIL
            recipient_list=['creonextech@gmail.com','koshtisahil02@gmail.com','pranjalvejani2111@gmail.com'],  # Replace with your agency email
            fail_silently=False,
        )

        print("success")
        return render(request, 'success.html', {'success': True})
    else:
        print("error")
    return redirect('index')

def project_featured(request):
    projects = Project.objects.filter(featured_projects=True)
    context = {
        'projects': projects,
    }
    return render(request, 'index.html', context)