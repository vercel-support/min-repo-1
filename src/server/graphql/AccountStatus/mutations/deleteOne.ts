import { mutationField, nonNull } from 'nexus'

export const AccountStatusDeleteOneMutation = mutationField(
  'deleteOneAccountStatus',
  {
    type: 'AccountStatus',
    args: {
      where: nonNull('AccountStatusWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.accountStatus.delete({
        where,
        ...select,
      })
    },
  },
)
