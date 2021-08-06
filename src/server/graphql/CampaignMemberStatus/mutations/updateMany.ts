import { mutationField, nonNull } from 'nexus'

export const CampaignMemberStatusUpdateManyMutation = mutationField(
  'updateManyCampaignMemberStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CampaignMemberStatusWhereInput',
      data: nonNull('CampaignMemberStatusUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.campaignMemberStatus.updateMany(args as any)
    },
  },
)
