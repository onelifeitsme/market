"""create table ad_11

Revision ID: 9f92b9a7d3f4
Revises: 5b0c5db87bc4
Create Date: 2024-05-22 06:03:50.713872

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9f92b9a7d3f4'
down_revision: Union[str, None] = '5b0c5db87bc4'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('ad',
    sa.Column('id', sa.String(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('phone', sa.String(length=20), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=True),
    sa.Column('age', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('ad')
    # ### end Alembic commands ###
