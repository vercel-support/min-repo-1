import { mutationField, nonNull } from 'nexus'

export const AccountUpdateManyMutation = mutationField('updateManyAccount', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'AccountWhereInput',
    data: nonNull('AccountUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.account.updateMany(args as any)
  },
})
