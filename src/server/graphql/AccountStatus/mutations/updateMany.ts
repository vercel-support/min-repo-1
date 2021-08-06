import { mutationField, nonNull } from 'nexus'

export const AccountStatusUpdateManyMutation = mutationField(
  'updateManyAccountStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AccountStatusWhereInput',
      data: nonNull('AccountStatusUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.accountStatus.updateMany(args as any)
    },
  },
)
