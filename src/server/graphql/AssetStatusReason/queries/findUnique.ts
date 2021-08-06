import { queryField, nonNull } from 'nexus'

export const AssetStatusReasonFindUniqueQuery = queryField(
  'findUniqueAssetStatusReason',
  {
    type: 'AssetStatusReason',
    args: {
      where: nonNull('AssetStatusReasonWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.assetStatusReason.findUnique({
        where,
        ...select,
      })
    },
  },
)
