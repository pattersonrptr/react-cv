"""migration 4

Revision ID: 55b5ed24e139
Revises: de92160d2e1e
Create Date: 2024-03-31 17:22:35.245631

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '55b5ed24e139'
down_revision: Union[str, None] = 'de92160d2e1e'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_addresses_id', table_name='addresses')
    op.drop_table('addresses')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('addresses',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('address', sa.VARCHAR(length=255), autoincrement=False, nullable=True),
    sa.Column('curriculum_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['curriculum_id'], ['curriculums.id'], name='addresses_curriculum_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='addresses_pkey')
    )
    op.create_index('ix_addresses_id', 'addresses', ['id'], unique=False)
    # ### end Alembic commands ###