import { mutationField, nonNull } from 'nexus'

export const AccountDeleteManyMutation = mutationField('deleteManyAccount', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'AccountWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.account.deleteMany({ where } as any)
  },
})
