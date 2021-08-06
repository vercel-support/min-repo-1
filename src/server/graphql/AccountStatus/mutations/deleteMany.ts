import { mutationField, nonNull } from 'nexus'

export const AccountStatusDeleteManyMutation = mutationField(
  'deleteManyAccountStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AccountStatusWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.accountStatus.deleteMany({ where } as any)
    },
  },
)
