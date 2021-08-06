import { mutationField, nonNull } from 'nexus'

export const AccountStatusUpdateOneMutation = mutationField(
  'updateOneAccountStatus',
  {
    type: nonNull('AccountStatus'),
    args: {
      where: nonNull('AccountStatusWhereUniqueInput'),
      data: nonNull('AccountStatusUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.accountStatus.update({
        where,
        data,
        ...select,
      })
    },
  },
)
