import { mutationField, nonNull } from 'nexus'

export const AccountTypeDeleteOneMutation = mutationField(
  'deleteOneAccountType',
  {
    type: 'AccountType',
    args: {
      where: nonNull('AccountTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.accountType.delete({
        where,
        ...select,
      })
    },
  },
)
