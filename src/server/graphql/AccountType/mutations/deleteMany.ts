import { mutationField, nonNull } from 'nexus'

export const AccountTypeDeleteManyMutation = mutationField(
  'deleteManyAccountType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AccountTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.accountType.deleteMany({ where } as any)
    },
  },
)
