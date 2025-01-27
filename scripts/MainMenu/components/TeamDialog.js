export class TeamDialog {
    constructor(closeCallback) {
        this.dialog = null;
        this.closeCallback = closeCallback;
        this.createDialog();
    }

    createDialog() {
        this.dialog = document.createElement('div');
        this.dialog.className = 'team-dialog';
        this.dialog.id = 'teamDialog';
        
        const dialogContent = document.createElement('div');
        dialogContent.className = 'team-dialog-content';
        
        // Add close button
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = 'x';
        closeButton.onclick = () => this.close();
        
        // Add title
        const title = document.createElement('h2');
        title.textContent = 'Our Amazing Team';
        title.className = 'team-title';
        
        // Add team members
        const membersList = this.createMembersList();
        
        dialogContent.appendChild(closeButton);
        dialogContent.appendChild(title);
        dialogContent.appendChild(membersList);
        this.dialog.appendChild(dialogContent);
        
        document.body.appendChild(this.dialog);
    }

    createMembersList() {
        const membersList = document.createElement('div');
        membersList.className = 'team-members';

        const members = ["Abdullah Maher", "Ahmed Essam", "Moamen Ayman", "Nada Emam", "Ahmed Zaki"];   
        this.shuffleMembers(members);
        
        members.forEach(member => this.addMemberCard(membersList, member));
        
        return membersList;
    }

    shuffleMembers(members) {
        for (let i = members.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [members[i], members[j]] = [members[j], members[i]];
        }
    }

    addMemberCard(membersList, member) {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        
        const memberIcon = document.createElement('div');
        memberIcon.className = 'member-icon';
        memberIcon.textContent = member.split(' ')[0][0] + member.split(' ')[1][0];
        
        const memberName = document.createElement('div');
        memberName.className = 'member-name';
        memberName.textContent = member;
        
        memberCard.appendChild(memberIcon);
        memberCard.appendChild(memberName);
        membersList.appendChild(memberCard);
    }

    show() {
        this.dialog.style.display = 'flex';
        setTimeout(() => {
            this.dialog.style.opacity = '1';
            this.dialog.querySelector('.team-dialog-content').style.transform = 'scale(1)';
        }, 10);
    }

    close() {
        this.dialog.style.opacity = '0';
        this.dialog.querySelector('.team-dialog-content').style.transform = 'scale(0.8)';
        setTimeout(() => {
            this.dialog.style.display = 'none';
        }, 300);
        if (this.closeCallback) this.closeCallback();
    }
}