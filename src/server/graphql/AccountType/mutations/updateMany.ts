import { mutationField, nonNull } from 'nexus'

export const AccountTypeUpdateManyMutation = mutationField(
  'updateManyAccountType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AccountTypeWhereInput',
      data: nonNull('AccountTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.accountType.updateMany(args as any)
    },
  },
)
