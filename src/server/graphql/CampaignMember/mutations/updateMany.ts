import { mutationField, nonNull } from 'nexus'

export const CampaignMemberUpdateManyMutation = mutationField(
  'updateManyCampaignMember',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CampaignMemberWhereInput',
      data: nonNull('CampaignMemberUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.campaignMember.updateMany(args as any)
    },
  },
)
