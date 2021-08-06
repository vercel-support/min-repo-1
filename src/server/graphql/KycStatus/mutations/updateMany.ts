import { mutationField, nonNull } from 'nexus'

export const KycStatusUpdateManyMutation = mutationField(
  'updateManyKycStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'KycStatusWhereInput',
      data: nonNull('KycStatusUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.kycStatus.updateMany(args as any)
    },
  },
)
